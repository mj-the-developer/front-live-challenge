import { useRef, useState } from 'react';
import { Button, Form, FormLayout, Frame, Modal, TextField } from '@shopify/polaris';
import { useHistory } from 'react-router-dom';

import { ToastMessage } from './shared/ToastMessage';
import { useNotDismissibleModalStyle } from 'hooks/useNotDismissibleModalStyle';
import { SafeStorage } from 'utils/SafeStorage';
import { API_BASE_URL, PATHS } from 'config/constants';
import { handleErrorPayload } from 'utils/handleErrorPayload';

export const Login = () => {
  const history = useHistory();

  const divRef = useRef<HTMLDivElement | null>(null);

  useNotDismissibleModalStyle(divRef, '#fff');

  const [fields, setFields] = useState({
    username: '',
    password: '',
    shop: 'somerandomreunion3.myshopify.com',
  });

  const [toast, setToast] = useState({ open: false, msg: '' });
  const [loading, setLoading] = useState(false);

  const updateFields = (value: string, key: string) => {
    setFields((fields) => {
      return { ...fields, [key]: value };
    });
  };

  const closeToast = () => setToast({ open: false, msg: '' });

  const toastMarkup = toast.open ? <ToastMessage message={toast?.msg} onDismiss={() => closeToast()} /> : null;

  const login = async () => {
    setLoading(true);

    const response = await fetch(`${API_BASE_URL}/support/login/panel/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(fields),
    });

    if (response.ok) {
      const result = await response.json();
      SafeStorage.set('loggedInAsUserToken', result?.access);
      history.push(PATHS.ROOT);
    } else {
      const error = await response.json();
      const message = handleErrorPayload(error);
      setToast({ open: true, msg: message });
      setLoading(false);
    }
  };

  return (
    <Frame>
      <Modal open={true} title="Login" onClose={() => {}} small noScroll>
        <Modal.Section>
          <div ref={divRef}></div>
          <Form preventDefault onSubmit={login}>
            <FormLayout>
              {Object.keys(fields).map((key) => (
                <TextField
                  key={key}
                  autoComplete="on"
                  label={key}
                  labelHidden
                  placeholder={key}
                  type={key === 'password' ? 'password' : 'text'}
                  id={key}
                  value={fields[key as keyof typeof fields]}
                  onChange={updateFields}
                />
              ))}

              <Button primary submit fullWidth loading={loading} accessibilityLabel="Login">
                Login
              </Button>
            </FormLayout>
          </Form>
        </Modal.Section>
      </Modal>

      {toastMarkup}
    </Frame>
  );
};
