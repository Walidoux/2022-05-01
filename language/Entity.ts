export type EntityType = 'player' | 'bot' | 'pet' | 'idle'

export class Entity {
  private readonly type: EntityType = 'idle'
  private readonly name: string

  private readonly speed = 1
  private readonly rotation = 0

  private readonly isMoving = false
  private readonly isFrozen = false
}
