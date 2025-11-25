/*
🍪 Implementación estilo PHP 8.2 completa en JavaScript

    Este código recrea el comportamiento de cookies en PHP, incluyendo:
    ✔ setcookie()
    ✔ $_COOKIE
    ✔ expires, path, domain, secure, samesite
    ❌ httponly (no permitido en JS del navegador)
*/

// Código completo:
    // ===============================
    //   $_COOKIE (como en PHP)
    // ===============================
    const $_COOKIE = {};

    (function loadCookies() {
        document.cookie.split(";").forEach(cookie => {
            const [name, value] = cookie.trim().split("=");
            $_COOKIE[name] = decodeURIComponent(value || "");
        });
    })();


    // ===============================
    //   setcookie() estilo PHP
    // ===============================
    function setcookie(
        name,
        value = "",
        options = {} // igual que PHP 8.2 (array asociativo)
    ) {
        let cookieStr = `${name}=${encodeURIComponent(value)};`;

        // --- Opciones PHP 8.2 ---
        if (options.expires) {
            // Acepta timestamp UNIX o Date
            let date;

            if (typeof options.expires === "number") {
                date = new Date(options.expires * 1000);
            } else if (options.expires instanceof Date) {
                date = options.expires;
            }

            cookieStr += ` expires=${date.toUTCString()};`;
        }

        if (options.path) cookieStr += ` path=${options.path};`;
        if (options.domain) cookieStr += ` domain=${options.domain};`;
        if (options.secure) cookieStr += " secure;";
        if (options.samesite) cookieStr += ` samesite=${options.samesite};`;

        // httponly existe en PHP, pero NO funciona en JS del navegador
        // Se ignora porque JS del cliente no puede crear cookies HttpOnly
        // if (options.httponly) cookieStr += " httponly;"; ❌ NO PERMITIDO EN JS CLIENTE

        // Guardar cookie
        document.cookie = cookieStr;

        // Actualizar $_COOKIE en JS
        $_COOKIE[name] = value;
    }


    // ===============================
    //   deletecookie() estilo PHP
    // ===============================
    function deletecookie(name, path = "/") {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};`;
        delete $_COOKIE[name];
    }

    // ===============================
    //   updatecookie() estilo PHP
    // ===============================
    //
    //   Igual que setcookie(), pero sin necesidad
    //   de volver a definir todas las opciones.
    //   Solo cambia el valor u opcionalmente la expiración.
    //
    function updatecookie(name, newValue, options = {}) {

        if (!$_COOKIE[name]) {
            console.warn(`La cookie "${name}" no existe. Se creará nueva.`);
        }

        // Mantener el valor anterior si el usuario no define uno
        const value = newValue !== undefined ? newValue : $_COOKIE[name];

        // Si no se define expiración, mantiene la misma si es posible
        if (!options.expires) {
            // No existe forma de leer la expiración de una cookie desde JS,
            // así que por defecto quedará como cookie "session".
            // Esto es una limitación del navegador.
        }

        // Se limita a llamar setcookie(), igual que PHP
        setcookie(name, value, options);
    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////    

// 🧪 Ejemplos EXACTOS como PHP
    // 1. Crear cookie:
    setcookie("usuario", "Juan", {
        expires: Math.floor(Date.now() / 1000) + 3600, // 1 hora
        path: "/",
        secure: true,
        samesite: "Lax"
    });

    // 2. Leer una cookie:
    console.log($_COOKIE["usuario"]);

    // 3. Eliminar una cookie:
    deletecookie("usuario");

    // 4. Leer todas las cookies:
    console.log($_COOKIE);

    // 5.1 Actualizar solo el valor:
    updatecookie("usuario", "Carlos");

    // 5.2 Actualizar valor + expiración:
    updatecookie("usuario", "Pedro", {
        expires: Math.floor(Date.now() / 1000) + 3600, // +1 hora
        path: "/"
    });

    // 5.3 Actualizar un campo de configuración:
    updatecookie("usuario", "Dario", {
        path: "/config"
    });


