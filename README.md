# VSCode-eXtender

**VSCode-eXtender** es una extensión avanzada para Visual Studio Code que permite reflejar ventanas del editor en otras computadoras Linux dentro de la misma red local, actuando como un segundo monitor virtual para colaboración en tiempo real. Su enfoque actual es la visualización remota de ventanas seleccionadas, permitiendo a otro desarrollador observar o editar un archivo específico de manera dirigida por el servidor.

## Objetivo del Proyecto

Permitir que una instancia de VS Code en una máquina servidor pueda compartir selectivamente una o varias ventanas del editor (cada una apuntando a un archivo distinto del proyecto) con un cliente conectado a la misma red local. Esto facilitará el trabajo colaborativo sin necesidad de Live Share completo y sin clonar todo el entorno de desarrollo.

## Características

* Reflejo remoto de ventanas seleccionadas por el servidor
* Permisos de visualización granular por parte del servidor (incluso para ventanas inactivas)
* Interfaz cliente ligera para Linux
* Compatibilidad futura con Gemini, GitHub Copilot y otros asistentes de IA mediante APIs locales o sockets
* Sistema modular que facilitará futura integración de Live Share u otro tipo de colaboración bidireccional

## Estructura de Carpetas Inicial

```
VSCode-eXtender/
├── client/                  # Cliente remoto ligero
│   ├── main.ts              # Entrada principal del cliente
│   ├── ui/                  # Interfaz visual (Electron, GTK o similar)
│   └── sockets/             # Conexión con el servidor por WebSocket o TCP
├── server/                  # Extensión VSCode instalada en la máquina principal
│   ├── extension.ts         # Entry point de la extensión
│   ├── windowManager.ts     # Selección de ventanas a compartir
│   ├── permissions.ts       # Sistema de permisos por ventana
│   ├── sockets/             # Servidor WebSocket o TCP para clientes
│   └── ai-hooks/            # Integración con Gemini o Copilot (opcional)
├── protocol/                # Especificación del protocolo de comunicación
│   └── messages.ts          # Mensajes definidos para intercambiar info entre cliente y servidor
├── shared/                  # Código común entre cliente y servidor
│   └── utils.ts             # Funciones comunes
├── README.md
├── LICENSE
└── package.json
```

## Tecnologías a Usar

* **TypeScript**: Lenguaje principal del proyecto
* **Electron o GTK**: Para la interfaz del cliente
* **VSCode API**: Para obtener y gestionar ventanas en el servidor
* **WebSockets o TCP**: Para comunicación en tiempo real
* **JSON-RPC o similar**: Para estructurar los mensajes

## Fases del Desarrollo

1. **Fase 1**: Reflejo unidireccional (ya en diseño)

   * El servidor comparte ventanas seleccionadas
   * El cliente solo puede ver, no editar
   * Control de permisos desde el servidor

2. **Fase 2**: Interacción ligera

   * El cliente podría realizar sugerencias, destacar texto o comentar

3. **Fase 3**: Edición colaborativa

   * Implementación estilo Live Share o por sockets p2p

## Colaboradores

Este proyecto está dirigido por **Yohan Landaeta**, aficionado en sistemas con enfoque en desarrollo de herramientas colaborativas y de productividad. Si deseas colaborar, clona el repositorio, crea una rama y envía un pull request con mejoras o ideas.

## Licencia

MIT

---

**Nota:** Este proyecto no clona la instancia completa de VS Code ni sus configuraciones. Solo permite redirigir ventanas específicas del editor bajo control del servidor para fines de visualización o colaboración remota.
