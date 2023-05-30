export interface IEvent {
  name: string
  params: Record<string, unknown> // refactor maybe
}

export class RetroEvent {
  public readonly _events: IEvent[] = []

  constructor(event: IEvent) {
    this._events.push(event)
  }
}
