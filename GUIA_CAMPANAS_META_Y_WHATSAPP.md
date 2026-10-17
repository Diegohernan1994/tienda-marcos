# 📘 Guía de Implementación: Tienda WhatsApp y Campañas de Meta Ads

Esta solución está diseñada específicamente para resolver el problema de **campañas en Meta (Facebook / Instagram Ads) sin sincronización del número de WhatsApp en el Business Manager / Fanpage**.

---

## 🎯 ¿Cómo funciona el embudo de conversión?

```
[Anuncio en Facebook / Instagram]
           │
           ▼
[Tienda Catálogo Web (/)]  <-- Carga en menos de 1 segundo (Astro)
           │                   • El cliente elige su almohada o pack
           │                   • Agrega al carrito (Evento: AddToCart)
           ▼
[Modal de Finalizar Pedido]
           │                   • Ingresa Nombre, Teléfono, CP y Dirección
           │                   • Elige Transferencia (-15%) o Tarjeta
           ▼
[PÁGINA DE CONVERSIÓN (/gracias)]  <-- ¡AQUÍ META REGISTRA LA CONVERSIÓN!
           │                           • Dispara evento: Purchase & Lead con monto en ARS
           │                           • Meta Ads aprende y optimiza tu anuncio
           ▼
[Redirección automática a WhatsApp]
                                       • Abre el WhatsApp de tu hermano
                                       • Mensaje con el pedido completo ya redactado
```

---

## ⚙️ 1. Configuración de WhatsApp y Pixel de Meta

Edita el archivo:
📄 [`src/data/config.js`](file:///c:/Users/Diego/Downloads/Agente%20Ayrton/Marcos/src/data/config.js)

```javascript
export const STORE_CONFIG = {
  name: "Almohadas Viscoelásticas Argentina",
  
  // 1. Coloca el número de WhatsApp de tu hermano (con código de país 549 para Argentina):
  whatsappNumber: "54911XXXXXXXX", 
  
  // 2. Coloca el ID del Pixel de Meta (lo encuentras en el Administrador de Eventos de Meta):
  metaPixelId: "TU_ID_DE_PIXEL", 

  // Porcentaje de descuento por transferencia bancaria (por defecto 15%):
  transferDiscountPercent: 15,
};
```

---

## 🚀 2. Configuración en el Administrador de Anuncios de Meta (Facebook Ads)

Dado que el número de WhatsApp no está sincronizado con la página de Facebook, se configura de la siguiente manera:

1. **Objetivo de la Campaña**:
   - Selecciona **Ventas** (o *Clientes potenciales*).
2. **Ubicación de la conversión**:
   - Selecciona **Sitio web**.
3. **Evento de conversión**:
   - Selecciona **Comprar (Purchase)** o **Cliente potencial (Lead)**.
   - *Alternativa (Conversión personalizada)*: Crea una conversión personalizada con la regla: **URL contiene `/gracias`**.
4. **Enlace del Anuncio**:
   - Coloca la URL de la tienda: `https://tudominio.com/` (o con UTMs de seguimiento: `https://tudominio.com/?utm_source=facebook&utm_campaign=almohadas`).

---

## 📦 3. Cómo Probar la Tienda en tu Computadora

En la terminal dentro de esta carpeta, puedes ejecutar:

```bash
npm run dev
```

Esto abrirá la tienda en `http://localhost:4321`.

### Pasos de prueba:
1. Elige un producto (ej. *Pack x2 Cervicales*).
2. Toca **Agregar**.
3. Abre la barra flotante inferior tocando **Ver Pedido**.
4. Completa los campos con datos de prueba y toca **Pedir por WhatsApp**.
5. Verás cómo entra a la URL `/gracias` (disparando el Pixel) y luego te ofrece el botón directo para abrir WhatsApp con el mensaje ya armado.

---

## 🌐 4. Opciones Gratuitas para Subirla a Internet

La tienda está lista en la carpeta `dist/` (sitio estático ultrarrápido). Puedes publicarla gratis en minutos en cualquiera de estos servicios:

- **Vercel** (`vercel.com`): Conectas el repositorio de Git o arrastras la carpeta y listo.
- **Cloudflare Pages** (`pages.cloudflare.com`): Cero costo de ancho de banda y máxima velocidad en Argentina.
- **Netlify** (`netlify.com`).
