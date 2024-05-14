commit c8e68d59e51c6ab56328062ac8bce7889b30062d
Author: Nayden Naydenov <31909318+nnaydenow@users.noreply.github.com>
Date:   Tue May 14 13:02:50 2024 +0300

    feat(ui5-*): integrate element internals in input components (#8685)
    
    Integrate the ElementInternals feature into UI5 web components. This enhancement allows input-like web components to behave as native input elements within HTML forms. As a result, the `features/InputElementsFormSupport.js` feature is now redundant and has been removed.
    
    Changes in `@customElement` decorator: Added new `formAssociated` flag attaches internals to the component when the component is associated with form (placed inside form).
    
    BREAKING CHANGE: The `features/InputElementsFormSupport.js` feature has been deleted and now, form elements works natively in form elements.
    
    Related: #8461
