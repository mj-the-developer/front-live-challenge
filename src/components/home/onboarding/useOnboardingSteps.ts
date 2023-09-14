import { useTranslation } from 'react-multi-lang';

import createFirstCampaign from 'assets/images/onboarding/create-first-campaign.svg';
import enableWidget from 'assets/images/onboarding/check-widget.svg';
import { PATHS } from 'config/constants';

import { OnboardingStep } from 'types/UiConfig';

export const useOnboardingSteps = () => {
  const t = useTranslation();

  return [
    {
      id: OnboardingStep.CreateCampaign,
      title: t('onboarding.create_campaign_title'),
      subtitle: [t('onboarding.create_campaign_subtitle')],
      illustration: createFirstCampaign,
      isPassed: false,
      isNew: false,
      primaryAction: {
        content: t('onboarding.create_campaign_action'),
        url: `${PATHS.CAMPAIGNS}new/`,
      },
    },
    {
      id: OnboardingStep.ProductPage,
      title: t('onboarding.product_page_title'),
      subtitle: [
        t('onboarding.product_page_content_1'),
        t('onboarding.product_page_content_2'),
        t('onboarding.product_page_content_3'),
      ],
      illustration: enableWidget,
      isPassed: false,
      isNew: false,
      primaryAction: {
        content: t('onboarding.product_page_action'),
        url: '#',
      },
    },
    {
      id: OnboardingStep.CartPage,
      title: t('onboarding.cart_page_title'),
      subtitle: [
        t('onboarding.cart_page_content_1'),
        t('onboarding.cart_page_content_2'),
        t('onboarding.cart_page_content_3'),
        t('onboarding.cart_page_content_4'),
      ],
      illustration: enableWidget,
      isPassed: false,
      isNew: false,
      primaryAction: {
        content: t('onboarding.cart_page_action'),
        url: '#',
      },
    },
  ];
};
