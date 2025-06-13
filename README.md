# 🧠 Finanzapp - Backend

Este módulo complementa la app **Finanzapp** procesando imágenes de tickets con **OCR** en Python, y está pensado para ser hosteado en un entorno económico como **AWS EC2**.

---

## 🎯 Objetivo

Recibir imágenes desde el frontend móvil, extraer texto mediante OCR, y devolver datos estructurados para registrar gastos automáticamente.

---

## 🔧 Tecnologías

- **Python 3.x**
- **PaddleOCR** para reconocimiento óptico
- **FastAPI** (planeado) como framework liviano de backend
- **Supabase** como almacenamiento y base de datos
- **AWS EC2** como hosting inicial

---

## 🔄 Flujo básico

1. La app móvil captura un ticket y lo envía al backend
2. El backend corre OCR sobre la imagen
3. Se devuelve un JSON con:
   - Total
   - Fecha
   - Categoría (opcional)
   - Productos (a futuro)

---

## 🔍 Estado del desarrollo

- [x] PaddleOCR funcionando localmente
- [ ] Endpoint `POST /analyze` con FastAPI
- [ ] Upload + análisis desde la app móvil
- [ ] Pipeline simple en EC2

---

## 🛠️ Proyección inmediata

- Deploy inicial en AWS EC2 (Ubuntu + venv)
- Agregar logging básico
- Endpoint público con token (simple auth)

---

## 👨‍💻 Autor

Desarrollado por [Agustín (Brollix)](https://github.com/Brollix) como parte del proyecto **Finanzapp**.

> El objetivo es mantener el backend simple, portable y económico.

