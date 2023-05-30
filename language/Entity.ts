export type EntityType = 'player' | 'bot' | 'pet' | 'idle'

export class Entity {
  private readonly type: EntityType = 'idle'
  private readonly name: string

  private readonly isMoving = false
  private readonly isFrozen = false
}
