// ESTO ES UNA CLASE PARA CREAR, LEER Y BORRAR COOKIES EN JS (PARA USARSE EN OTRO SCRIPT .JS SE DEBE IMPORTAR/O HACER UN REQUIRE):
class CookieManager {
    // Similar a $_COOKIE
    static all() {
        const obj = {};
        document.cookie.split(";").forEach(c => {
            const [name, value] = c.trim().split("=");
            obj[name] = decodeURIComponent(value || "");
        });
        return obj;
    }

    // Similar a setcookie()
    static set(name, value, seconds = null, path = "/") {
        let cookie = `${name}=${encodeURIComponent(value)}; path=${path};`;

        if (seconds !== null) {
            const date = new Date();
            date.setTime(date.getTime() + seconds * 1000);
            cookie += `expires=${date.toUTCString()};`;
        }

        document.cookie = cookie;
    }

    // Obtener cookie (similar a $_COOKIE["nombre"])
    static get(name) {
        return this.all()[name] || null;
    }

    // Eliminar cookie
    static delete(name, path = "/") {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};`;
    }
}


// Para crear una cookie:
CookieManager.set("usuario", "Juan", 3600);

// Para leer una cookie:
console.log(CookieManager.get("usuario"));

// Para leer todas las cookies existentes en el navegador:
console.log(CookieManager.all());

// Para borrar una cookie:
CookieManager.delete("usuario");

