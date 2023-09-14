export type NotificationSettings = Record<NotificationOptionKeys, boolean> & {
  contact_email: string;
};

export type NotificationOptionKeys =
  | 'action_notifications_enable'
  | 'campaign_process_start_notifications_enable'
  | 'campaign_start_notifications_enable'
  | 'campaign_start_notifications_enable'
  | 'campaign_finish_notifications_enable'
  | 'order_submitted_notifications_enable';
