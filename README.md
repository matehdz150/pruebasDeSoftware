# pruebasDeSoftware

## 🚀 Commit Guidelines

Todos los commits en este repositorio deben seguir la convención de **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)**. Esto ayuda a mantener un historial de cambios claro y estructurado.

### 📌 Formato de Commit:

Cada commit debe seguir esta estructura:

<tipo>(<área opcional>): <mensaje breve>

Ejemplos:

- `feat: agregar funcionalidad de autenticación`
- `fix(api): corregir error en la validación de datos`
- `docs: actualizar el README con nuevas instrucciones`
- `chore(deps): actualizar dependencias`

### Tipos de Commits:

| Tipo       | Descripción                                           |
| ---------- | ----------------------------------------------------- |
| `feat`     | Nueva funcionalidad                                   |
| `fix`      | Corrección de errores                                 |
| `docs`     | Cambios en documentación                              |
| `style`    | Cambios de formato (espacios, comas, etc.)            |
| `refactor` | Código refactorizado sin cambiar la funcionalidad     |
| `test`     | Agregar o actualizar pruebas                          |
| `chore`    | Tareas de mantenimiento (ej. actualizar dependencias) |

💡 **Importante:** Cualquier commit que no siga esta convención fallará en CI/CD y no podrá ser mergeado.
