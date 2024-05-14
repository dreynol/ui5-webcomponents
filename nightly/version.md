commit cf9f1c28c93b9fa6c8663ce24d3c5e6d1ff4cc4e
Author: Elena Stoyanova <elena.stoyanova@sap.com>
Date:   Tue May 14 16:02:44 2024 +0300

    feat(ui5-input): allow custom icon styling (#8881)
    
    Reusable component styles
    
    Introduce reusable css styles for input icons in order to be used by applications using icons in the input-type of components as a slot.
    - adapt existing component which used to add `input-icon` html attribute to reuse the input icon styling with the new `inputIcon` class.
    - reuse InputIcon.css in the Icon.module.css.
    
    The approach is from #8182 .
    
    FIXES: #6132
