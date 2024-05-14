commit e451cdc3709553dcb780f637463dc1b29e8f2971
Author: Georgieva <lidiya.georgieva@sap.com>
Date:   Tue May 14 13:02:34 2024 +0300

    feat(ui5-li-notification): implement new design (#8426)
    
    * feat(ui5-li-notification-*): implement new design
    
    There is new design for the Notifications.
    In the current pull request we implement the changes for the Notification Item:
    - new slot "menu" is introduced (to replace the ui5-notification-action)
    - ui5-notification-action is deprecated
      (still will be visualized, but will be completely removed in future)
    - if there is only one action it will go on the overflow
      (bafore it was rendered as separate button)
    - sampes are updated
    
    BGSOFUIRODOPI-3226
