# 📋 DOCUMENTO MAESTRO DE TRANSFERENCIA PARA AGENTES (HANDOFF)
## Proyecto: Marcos — Tienda de Almohadas Viscoelásticas (Córdoba) + Agente Comercial SaaS + Operativa Multi-Perfil Meta

> **Propósito de este documento:** Proveer a cualquier agente de IA o desarrollador el contexto técnico, comercial, arquitectónico y operativo al **100%** para continuar trabajando de inmediato sin pérdida de información.

---

## 📌 1. Resumen Ejecutivo y Datos del Negocio

- **Nombre del Proyecto / Cliente:** Marcos (Hermano de Diego)
- **Marca Comercial:** Almohadas Viscoelásticas Córdoba
- **Ubicación Operativa:** Ciudad de Córdoba, Argentina
- **WhatsApp Oficial de Ventas:** `5493518142542` (`+54 9 351 814-2542`)
- **URL Pública del Catálogo (Producción):** `https://tienda-marcos.pages.dev`
- **Horario de Atención:** Lunes a Sábados de 9:00 a 20:00 hs
- **Descuento por Transferencia Bancaria:** `15% OFF` sobre el precio de lista
- **Reserva Financiera por Devoluciones:** `2.0%`
- **Esquema Logístico en Córdoba Capital:**
  - **Dentro de Circunvalación:** `$3.000 ARS`
  - **Fuera de Circunvalación:** `$5.000 ARS`
  - **Envío Gratis (Bonificado):** En compras superiores a `$100.000 ARS`
- **Ruta Raíz del Proyecto en PC:** `C:\Users\Diego\Downloads\Agente Ayrton\Marcos`

---

## 🏗️ 2. Arquitectura General del Proyecto

El proyecto dentro de `C:\Users\Diego\Downloads\Agente Ayrton\Marcos` se compone de **3 pilares integrados**:

1. **Tienda Catálogo Web estilo WhatsApp Business (Frontend en Astro 5 + Tailwind CSS):**
   - Ubicada en la raíz (`src/`, `public/`, `dist/`).
   - Diseñada para recibir tráfico de **Meta Ads (Facebook / Instagram Ads)** sin requerir que el número de WhatsApp esté sincronizado en el Business Manager, registrando las conversiones (`Purchase` y `Lead`) en la página intermedia `/gracias` antes de redirigir automáticamente a WhatsApp.
   - Incluye **telemetría en vivo** que envía eventos de navegación, origen de anuncio, permanencia, clics y carritos abandonados al backend del Agente Comercial.

2. **Agente Comercial Todo-en-Uno / Panel SaaS (`agente-comercial-saas/`):**
   - Servidor backend en Python (`server.py`, puerto `4567` por defecto) + Panel Web interactivo (`public/index.html`) + Bot de Telegram en segundo plano.
   - Permite a Marcos:
     - **Ensamblar Reels publicitarios en MP4 (1080x1920, 30fps, sin voz)** con **FFmpeg** usando fotos y videos 100% reales tomados con su celular (0% IA generativa de imagen para no alterar la textura real del producto).
     - **Hablar por voz con el Agente** (desde Telegram o desde el micrófono del panel web) y recibir respuestas en **Nota de Voz con acento argentino (`es-AR-TomasNeural`)**.
     - **Gestionar costos, precios, márgenes limpios y CPA máximo** en tiempo real.
     - **Auditar campañas de Meta Ads** mediante el sistema de **Semáforo (Verde / Amarillo / Rojo)**.
     - **Guardar reglas de negocio en la Memoria Permanente del Agente**.
     - **Monitorear analítica en vivo de la tienda** (visitas por anuncio específico, tasa de conversión a WhatsApp y carritos abandonados).

3. **Operativa Multi-Perfil de Ventas en Facebook / Marketplace (Navegador Brave):**
   - En la PC de Marcos se operan más de 15 perfiles de Facebook aislados en distintos perfiles/usuarios del navegador **Brave** para publicación y venta en Marketplace / Grupos.
   - Se implementó el flujo de desbloqueo de **"Protección Avanzada de Meta" (Claves de acceso / Passkeys)** mediante la extensión **Bitwarden Password Manager** para sortear el bloqueo de Windows 10 cuando solicita llave de seguridad USB física.

---

## 📂 3. Estructura de Directorios y Archivos Clave

```text
C:\Users\Diego\Downloads\Agente Ayrton\Marcos\
├── astro.config.mjs                        # Configuración de Astro 5 + Tailwind
├── tailwind.config.mjs                     # Paleta y configuración de estilos
├── package.json                            # Scripts: dev, build, preview (Astro ^5.18.2)
├── PROYECTO_ESPECIFICACIONES.md            # Visión inicial y especificaciones del negocio
├── GUIA_CAMPANAS_META_Y_WHATSAPP.md        # Guía del embudo Meta Ads -> /gracias -> WhatsApp
├── REPORTE_TIENDAS_Y_ESTRATEGIA_META_ADS.pdf
├── DOCUMENTO_MAESTRO_PROYECTO_MARCOS.md    # Este documento maestro de handoff
│
├── public/                                 # Assets estáticos de la tienda Astro
│   ├── logo.jpg                            # Logo de la tienda
│   └── images/                             # Fotos reales de cada producto y packs
│
├── imagenes_publicidad/                    # Creativos estáticos para anuncios
├── reels_publicidad/                       # Videos MP4 base de publicidad
├── dist/                                   # Build estático de producción listo para Cloudflare Pages
│
├── src/                                    # Código fuente de la Tienda Catálogo (Astro)
│   ├── data/
│   │   ├── config.js                       # WhatsApp (5493518142542), Pixel ID, % descuento (15%), tarifas envío
│   │   └── products.js                     # Catálogo detallado (6 productos con precios, uso y cuidados)
│   ├── layouts/
│   │   └── Layout.astro                    # Layout base + inyección del Meta Pixel + FontAwesome
│   ├── pages/
│   │   ├── index.astro                     # Catálogo interactivo, filtros, modales, carrito y telemetría
│   │   └── gracias.astro                   # Página de conversión (fbq Purchase/Lead) + redirect a WhatsApp (1s)
│   └── styles/
│       └── global.css
│
└── agente-comercial-saas/                  # Plataforma SaaS y Bot del Agente Comercial de Marcos
    ├── server.py                           # Servidor HTTP multihilo + API REST + FFmpeg + Voz + Worker Telegram
    ├── state.json                          # Base de datos JSON persistente (productos, costos, memoria, analítica)
    ├── requirements.txt                    # Dependencias Python (Pillow, SpeechRecognition, edge-tts, etc.)
    ├── Dockerfile                          # Contenedor listo para despliegue (Python + FFmpeg)
    ├── public/
    │   └── index.html                      # Dashboard completo del Agente Comercial (UI Web)
    ├── uploads_reales/                     # Fotos y clips MP4/MOV reales subidos por Marcos desde el celular
    ├── reels/                              # Reels MP4 (1080x1920) generados por el motor FFmpeg
    ├── voices/                             # Notas de voz (.mp3 y .ogg Opus) generadas por el Agente
    └── temp_build/                         # Archivos temporales de renderizado FFmpeg y transcripción WAV
```

---

## 🛏️ 4. Catálogo de Productos, Estructura de Costos y CPA (Estado Actual)

Datos sincronizados entre [`src/data/products.js`](file:///c:/Users/Diego/Downloads/Agente%20Ayrton/Marcos/src/data/products.js) y [`agente-comercial-saas/state.json`](file:///c:/Users/Diego/Downloads/Agente%20Ayrton/Marcos/agente-comercial-saas/state.json):

| ID Producto | Nombre | Precio tachado | Precio Lista | Precio c/ Transf. (-15%) | Costo Base | Packaging | Reserva Devol. (2%) | Ganancia Limpia (Transf.) | CPA Ideal (30%) | CPA Máx (85%) |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| `pack-2-cervicales` | **Pack x2 Almohadas Cervicales Ergonómicas** *(Más vendido)* | $89.900 | **$64.900** | **$55.165** | $32.000 | $600 | $1.298 | **+$21.267** | $6.380 | $18.077 |
| `cervical-individual` | **Almohada Cervical Ergonómica (1 unidad)** | $47.900 | **$35.900** | **$30.515** | $16.000 | $400 | $718 | **+$13.397** | $4.019 | $11.387 |
| `pack-2-clasicas` | **Pack x2 Almohadas Tradicionales Clásicas** | $82.900 | **$59.900** | **$50.915** | $29.000 | $600 | $1.198 | **+$20.117** | $6.035 | $17.099 |
| `clasica-individual` | **Almohada Tradicional Clásica (1 unidad)** | $42.900 | **$32.900** | **$27.965** | $14.500 | $400 | $658 | **+$12.407** | $3.722 | $10.546 |
| `gel-fresh` | **Almohada Viscoelástica Fresh Gel (Efecto Frío)** | $56.900 | **$43.900** | **$37.315** | $21.000 | $400 | $878 | **+$15.037** | $4.511 | $12.781 |
| `funda-repuesto` | **Funda Extra de Repuesto (Algodón con Cierre)** | $14.900 | **$9.900** | **$8.415** | $4.200 | $200 | $198 | **+$3.817** | $1.145 | $3.244 |

### Fórmulas Financieras en [`agente-comercial-saas/server.py`](file:///c:/Users/Diego/Downloads/Agente%20Ayrton/Marcos/agente-comercial-saas/server.py#L73-L102):
- `transferPrice = round(price * (1 - transferDiscountPercent / 100))`
- `returnReserve = round(price * (returnReservePercent / 100))`
- `totalDirectCost = cost + packagingCost + returnReserve`
- `netMarginTransfer = transferPrice - totalDirectCost`
- `cpaIdeal = round(netMarginTransfer * 0.30)`
- `cpaMax = round(netMarginTransfer * 0.85)`

---

## 🛒 5. Detalle Técnico de la Tienda Catálogo (`src/`)

### 5.1 Experiencia de Usuario y Conversión ([`src/pages/index.astro`](file:///c:/Users/Diego/Downloads/Agente%20Ayrton/Marcos/src/pages/index.astro))
- **Diseño:** Inspirado en WhatsApp Business (`#008069` y `#25D366`), 100% adaptable desde pantallas de `320px` de ancho sin desbordes.
- **Filtros por Categoría:** `Todos`, `Packs Ahorro`, `Cervicales`, `Clásicas`, `Especiales`, `Fundas`.
- **Tarjetas de Producto:**
  - Al tocar la foto, el título o `+ Info y uso`, abre el **Modal de Detalles** que muestra: Descripción completa, *¿Cómo se usa?* (`howToUse`), *Precauciones y Cómo cuidarla* (`careInstructions`) y el cuadro de tarifas de envío en Córdoba.
  - Selector de cantidad (`-` / `+`) directo en cada tarjeta.
  - Dos botones de acción inmediata: **`+ Carrito`** (persiste en `localStorage` bajo la clave `pillow_cart` y dispara `fbq('track', 'AddToCart')`) y **`Pedir Ya`** (arma la orden directa, dispara `InitiateCheckout` y redirige a `/gracias`).
- **Barra Flotante Inferior y Modal de Carrito:**
  - Calcula automáticamente el subtotal, el descuento del 15% por transferencia y cuánto falta para alcanzar los `$100.000` de **Envío Gratis**.
  - Al confirmar el pedido (`sendCartToWhatsapp()`), genera un ID de orden (`#ALM-XXXX`), guarda los datos en `sessionStorage` (`current_order`), incluye la etiqueta de atribución (`🏷️ *Origen:* ...`) al final del mensaje de WhatsApp y redirige a `/gracias`.

### 5.2 Página de Conversión ([`src/pages/gracias.astro`](file:///c:/Users/Diego/Downloads/Agente%20Ayrton/Marcos/src/pages/gracias.astro))
- Recibe `order_id`, `total` y `wa_url` por query string o desde `sessionStorage`.
- Dispara los eventos del Pixel de Meta:
  - `fbq('track', 'Purchase', { value: finalTotal, currency: 'ARS', order_id: finalOrderId })`
  - `fbq('track', 'Lead', { value: finalTotal, currency: 'ARS' })`
- Ejecuta un `setTimeout` de **1000 ms (1 segundo)** para dar tiempo al navegador a enviar el beacon del Pixel a Meta y luego redirige automáticamente a `https://api.whatsapp.com/send?phone=5493518142542&text=...`.

### 5.3 Telemetría y Atribución de Anuncios ([`src/pages/index.astro`](file:///c:/Users/Diego/Downloads/Agente%20Ayrton/Marcos/src/pages/index.astro#L1120-L1323))
- Lee parámetros de URL (`anuncio`, `utm_content`, `ad`, `utm_campaign`, `origen`, `utm_source`, `fbclid`, `igshid`) o `document.referrer` y guarda la atribución en `sessionStorage` (`marcos_attribution`).
- Envía beacons JSON a `window.MARCOS_AGENT_TRACK_URL || 'http://localhost:4567/api/track'` en 5 eventos:
  1. `page_view`: Al abrir la tienda.
  2. `product_view`: Al abrir el popup de detalles de una almohada.
  3. `add_to_cart`: Al sumar un producto al carrito.
  4. `whatsapp_order`: Al tocar *"Pedir Ya"* o *"Pedir Carrito por WhatsApp"* (incluye clics totales, segundos de permanencia y valor del carrito).
  5. `abandoned_cart` / `session_end`: Se dispara en el evento `visibilitychange` (`hidden`) si el usuario tenía productos en el carrito y cerró la pestaña sin pedir por WhatsApp.

---

## 🤖 6. Detalle Técnico del Agente Comercial SaaS (`agente-comercial-saas/`)

### 6.1 Cómo Iniciar el Servidor del Agente
```powershell
cd "C:\Users\Diego\Downloads\Agente Ayrton\Marcos\agente-comercial-saas"
python server.py
```
- **Puerto por defecto:** `4567` (con fallback automático a `5055`, `3055`, `8765` si estuviera ocupado).
- **URL Local del Panel:** `http://localhost:4567`

### 6.2 Reglas Estrictas del Motor de Reels (`server.py` líneas 190-395)
- **PROHIBIDO usar IA generativa de imagen que altere o invente el producto.** El motor toma las fotos o videos reales de `uploads_reales/` y los encuadra intactos dentro de una ventana central transparente de `960x920` (`x=60, y=350`) sobre un lienzo vertical de `1080x1920`.
- **Estética del Marco (`create_overlay_frame_rgba`):** Tonos pastel cálidos (crema `#F6F3EC`, verde salvia suave y grafito, cero colores flúor o neón).
- **Audio de los Reels:** Todos los Reels MP4 se exportan **100% mudos (`-an`)** a 30fps (`libx264`, `yuv420p`) para que Marcos pueda subirlos a Meta Ads o agregarles música en tendencia desde Instagram/Facebook.
- **3 Ángulos de Venta preconfigurados:**
  1. `cervical` (*Alivio Cervical y Postura*)
  2. `pack` (*Promo Pack x2 Ahorro con 15% OFF Transferencia*)
  3. `rebote` (*Demostración Real de Densidad y Memoria*)

### 6.3 Motor de Voz para Hablar con el Agente (`server.py` líneas 397-461)
- **Nota importante:** Los Reels no llevan voz, pero **el Agente sí habla con Marcos y lo escucha**.
- **STT (Voz a Texto):** Convierte audios de Telegram (`.ogg`) o del navegador (`.webm`) a WAV 16kHz mono con `ffmpeg` y los transcribe con `SpeechRecognition` en idioma `es-AR`.
- **TTS (Texto a Voz):** Limpia markdown/símbolos y genera audio hablado con `edge-tts` usando la voz neuronal argentina `es-AR-TomasNeural` (`rate="+6%"`), exportando tanto `.mp3` (para el panel web) como `.ogg` con códec `libopus` (para enviar como nota de voz nativa en Telegram vía `sendVoice`).

### 6.4 Mapa de Endpoints de la API (`server.py`)
- `GET /api/state`: Devuelve estado completo (negocio, productos con métricas financieras calculadas, analítica de la tienda, memoria aprendida, historial de chat, lista de Reels, archivos reales subidos y estado del bot de Telegram).
- `POST /api/chat`: Ejecuta una instrucción por texto (`execute_agent_instruction`).
- `POST /api/voice-order`: Recibe audio en Base64 desde el micrófono web, lo transcribe, ejecuta la orden y devuelve respuesta en texto + URL de nota de voz.
- `POST /api/upload`: Guarda fotos o videos reales del celular en `uploads_reales/`.
- `POST /api/build-reel`: Ensambla un nuevo Reel MP4 con los archivos seleccionados y el ángulo elegido.
- `POST /api/delete-reel` y `POST /api/delete-upload`: Elimina Reels o archivos subidos.
- `POST /api/products`: Actualiza precios, costos, costo de packaging, porcentaje de descuento por transferencia y reserva de devoluciones.
- `POST /api/memory/add` y `POST /api/memory/delete`: Agrega o elimina reglas de la memoria permanente de Marcos.
- `POST /api/track` y `POST /api/analytics/reset`: Recibe eventos de la tienda online o reinicia los contadores de analítica.
- `POST /api/config`: Configura en caliente el `botToken` de Telegram y/o la `apiKey` de OpenAI/LLM externo.

---

## 🛡️ 7. Operativa de Perfiles de Venta en Brave y Desbloqueo de Meta (Passkeys)

### 7.1 Contexto de la PC de Marcos
- Marcos opera más de **15 perfiles de venta de Facebook** simultáneos en una PC con **Windows 10**.
- Cada cuenta de Facebook vive en un **perfil de usuario independiente del navegador Brave** (carpetas aisladas en disco, sin compartir cookies ni extensiones entre sí).
- Para asistencia remota desde la PC de Diego hacia la PC de Marcos se utiliza **Asistencia Rápida de Windows** (`Ctrl + Windows + Q`, usando el icono de **Chat 💬** de la barra superior para copiar y pegar textos entre ambas PCs) o **AnyDesk** (`C:\Users\Diego\Desktop\AnyDesk.exe`).

### 7.2 Solución Implementada para el Bloqueo "Activa la protección avanzada" (Passkey de Meta)
Cuando Facebook bloquea temporalmente un perfil comercial exigiendo **"Crear clave de acceso (Passkey)"**, Windows 10 en la PC de Marcos intenta pedir una llave de seguridad USB física (*"Inserta la clave de seguridad en el puerto USB"*).

**Protocolo exacto para desbloquear cada perfil sin USB ni teléfono:**
1. Dentro de la ventana de Brave del perfil bloqueado, abrir una pestaña nueva e instalar la extensión oficial **Bitwarden Password Manager**:
   `https://chromewebstore.google.com/detail/bitwarden-password-manage/nngceckbapebfimnlniiiahkandclblb`
   *(Instalar la extensión en un perfil de Brave NO afecta ni modifica ninguno de los otros perfiles de Brave).*
2. Iniciar sesión en la extensión Bitwarden (cuenta activa utilizada: `melubelen04@gmail.com`).
3. En **Ajustes ⚙️ → Seguridad → Tiempo de espera de la caja fuerte**, configurar en **"Nunca"** para que no se cierre la sesión.
4. **Recargar (`F5`)** la pestaña de Facebook donde está el cartel de *"Activa la protección avanzada"*.
5. Hacer clic en el botón azul **"Crear clave de acceso"** / **"Crear llave de acceso"**.
6. Bitwarden intercepta el pedido antes que Windows. En la ventana emergente de Bitwarden:
   - ⚠️ **REGLA CRÍTICA:** Hacer clic siempre en **"Guardar como un nuevo inicio de sesión"** (nunca seleccionar de la lista una clave de otro perfil anterior).
7. El perfil queda desbloqueado al instante (*"La protección avanzada está activada"*).

### 7.3 Estado de Perfiles Desbloqueados y Pendientes
- ✅ **`crear3427@hotmail.com`**: Desbloqueado con éxito (Passkey guardada en Bitwarden).
- ✅ **`san887.massa@gmail.com`**: Desbloqueado con éxito (Passkey guardada en Bitwarden).
- ⏳ **Perfil "Mirko Salas" (`p******6@hotmail.com`)**:
  - Antes de emitir la Passkey, Meta solicita un código de verificación enviado al correo `p******6@hotmail.com`.
  - **Acción requerida:** Buscar en las anotaciones/planilla de Marcos cuál es el correo completo que empieza con `p` y termina en `6@hotmail.com` para leer el código en `outlook.com` (o, si la cuenta Hotmail caducó por inactividad en Microsoft, volver a registrarla con el mismo nombre exacto en `outlook.com` y tocar *"Obtener un código nuevo"*).

---

## 🚀 8. Próximos Pasos Sugeridos para el Siguiente Agente

1. **Despliegue / Sincronización en Producción:**
   - Si se modifican precios o productos en `src/data/products.js` o `src/data/config.js`, ejecutar `npm run build` en `C:\Users\Diego\Downloads\Agente Ayrton\Marcos` para actualizar la carpeta `dist/` y desplegar en Cloudflare Pages (`tienda-marcos.pages.dev`).
2. **Conexión del Pixel de Meta Real:**
   - Reemplazar `"TU_META_PIXEL_ID"` en [`src/data/config.js`](file:///c:/Users/Diego/Downloads/Agente%20Ayrton/Marcos/src/data/config.js) cuando Marcos cree el Pixel en su Administrador de Eventos.
3. **Activación del Bot de Telegram 24/7:**
   - Cargar el `botToken` de `@BotFather` en el panel del Agente (`http://localhost:4567` → Configuración o en `agente-comercial-saas/state.json`) para que Marcos pueda mandar fotos, videos y audios desde su celular directamente por Telegram.
4. **Destrabar Perfil "Mirko Salas":**
   - Una vez que Marcos identifique el correo `p******6@hotmail.com`, ingresar el código de 6 dígitos y guardar la nueva Passkey en Bitwarden siguiendo el protocolo de la Sección 7.2.
