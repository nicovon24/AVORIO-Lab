const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;

// Configuración de la estrategia de autenticación de Google
passport.use(
	new GoogleStrategy(
		{
			clientID: "YOUR_CLIENT_ID",
			clientSecret: "YOUR_CLIENT_SECRET",
			callbackURL: "http://localhost:3000/auth/google/callback",
		},
		(accessToken, refreshToken, profile, cb) => {
			// Realiza cualquier verificación adicional o búsqueda de usuario aquí
			// y devuelve el objeto de usuario
			return cb(null, profile);
		}
	)
);

// Configuración de la estrategia de autenticación local
passport.use(
	new LocalStrategy((username, password, cb) => {
		// Realiza la búsqueda o verificación del usuario aquí
		// y devuelve el objeto de usuario
		const user = { id: 1, username: "user", password: "password" };
		if (username !== user.username || password !== user.password) {
			return cb(null, false);
		}
		return cb(null, user);
	})
);

// Controlador para la autenticación de Google
exports.googleAuth = passport.authenticate("google", { scope: ["profile"] });

// Controlador para la devolución de llamada de autenticación de Google
(exports.googleCallback = passport.authenticate("google", {
	failureRedirect: "/login",
})),
	(req, res) => {
		// Autenticación exitosa, redirigir a la página de inicio.
		res.redirect("/");
	};

// Controlador para la autenticación local
exports.localAuth = passport.authenticate("local", {
	failureRedirect: "/login",
	successRedirect: "/",
});
