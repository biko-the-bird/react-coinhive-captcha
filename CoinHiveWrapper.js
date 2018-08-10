import React from 'react';

class CoinHiveWrapper extends React.Component{

    componentDidMount() {
        window.myCaptchaCallback = (t) => {
            console.log(t, "<- this is the coinhive token");
            window.localStorage.setItem("coinHiveToken", t);
            
        }
    }
  
    render(){

        if (this.props.coinHiveKey != undefined) {
            return (
                <div>
                     <form>
                    <div className="coinhive-captcha" data-hashes="256" data-disable-elements="input[type=submit]" data-whitelabel="true" data-key={this.props.coinHiveKey} data-callback="myCaptchaCallback">
                    <em>Loading Captcha...<br/>
                        If it does not load, please disable Adblock and reload!</em>
                    </div>
                    <input className="coinhive-captcha-token"/>
                    </form>
                </div>
            )

        } else {
        //optionally you can just add your site key in manually instead of passing it as a prop each time
            return (
                <div>
                     <form>
                    <div className="coinhive-captcha" data-hashes="256" data-disable-elements="input[type=submit]" data-whitelabel="true" data-key="_PUBLIC_SITE_KEY_GOES_HERE_" data-callback="myCaptchaCallback">
                    <em>Loading Captcha...<br/>
                        If it does not load, please disable Adblock and reload!</em>
                    </div>
                    <input className="coinhive-captcha-token"/>
                    </form>
                </div>
            )
        }
       
    }
};


export default CoinHiveWrapper;

