# react-coinhive-captcha
React Wrapper for Coinhive's Captcha.
To use this component you need to create a coinhive account to get your api key.


The Original Captcha documentation is here: https://coinhive.com/documentation/captcha

# Usage:


# 1. Add stuff to your html page:
In your html ```<body>``` add ```
      <script src="https://authedmine.com/lib/captcha.min.js" async></script>
    
    <div id="coinhiveToken" token=""></div>```
    
# 2.  import the component in your react app:
```
import './CoinHiveWrapper';
```
# 3. and then use it in your render():
```<CoinHiveWrapper coinHiveKey={"this is where you put your Coinhive 'public site key'"}/>```
 you can find your coinhive public site key on coinhive's settings.
       
# 4. Validation:
```CoinHiveWrapper``` saves the single use token it generates to ```window.localStorage.coinHiveToken```. You retrieve it from there and send it in with your login/form/whatever to your server for validation. Refer to the coinhive captcha docs for how to verify the token serverside: https://coinhive.com/documentation/captcha
       
       
# Props

coinHiveKey: your coinhive public site key.
