
### Nuevos archivos:
- `src/constants/eventData.ts`: Define los datos de eventos
- `src/services/NavigationService.ts`: Servicio para manejo de navegación
- `src/factories/IconFactory.ts`: Factory para creación de iconos
- `src/components/EventItem.tsx`: Componente reutilizable para eventos
- `src/hooks/useEvents.ts`: Hook para lógica de eventos

### Archivos modificados:
- `src/pages/Evento.tsx`: Refactorizado 

## Ejemplo de uso:

Para agregar un nuevo evento, simplemente se modifica `eventData.ts`:

```typescript
{
  id: 'new-event',
  title: 'Nuevo Evento',
  time: '8:00 pm',
  location: 'Nueva Ubicación',
  address: 'Nueva Dirección',
  icon: 'new-icon',
  mapUrl: 'newEventLocation',
  animationDirection: 'left',
  playScale: [0.05, 0.5]
}
```

Y se agrega el nuevo icono en `IconFactory.ts`:

```typescript
private static iconMap: Record<string, string> = {
  // ... existentes
  'new-icon': NewIcon
};
```
