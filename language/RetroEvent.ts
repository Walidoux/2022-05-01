export interface IEvent {
  name: string
  params: Record<string, unknown> // refactor maybe
}

// Neither Event nor CustomEvent will work on a node environment
export class RetroEvent {
  public readonly _events: IEvent[] = []

  constructor(event: IEvent) {
    this._events.push(event)
  }
}
