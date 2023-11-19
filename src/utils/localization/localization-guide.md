## Localization Implementation Guide

-   Always base the English language , and it is the default fallback language
-   Maintain the word repository in the `en.json` file.
-   Use the `useTranslation` hook to use `t` function to fetch the translations.

### Json file

-   all the keys should be lowercase , with kebab case (account-management)
-   create json object for separate screens.
-   use the related ui group objects.
-   add the common words into the `common` object.
