import {DateTime} from "@envuso/core";
import {CookieConfiguration} from "@envuso/core/Routing";

export default {

	cookie : <CookieConfiguration>{
		path     : '/',
		httpOnly : false,
		secure   : true,
		expires  : DateTime.now().add(5, 'years').toDate(),
		sameSite : true,
		domain   : null,
	},

	cookieName : 'session',

	encryptCookies : true,

};
