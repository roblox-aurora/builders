export class OverlapParamsBuilder {
	private params = new OverlapParams();
	public constructor() {}

	public SetMaxParts(maxParts: number) {
		this.params.MaxParts = maxParts;
		return this;
	}

	public SetCollisionGroup(collisionGroupId: string) {
		this.params.CollisionGroup = collisionGroupId;
		return this;
	}

	public SetFilter(filterDescendantsInstances: Instance[], filterType?: Enum.RaycastFilterType) {
		this.params.FilterDescendantsInstances = filterDescendantsInstances;
		if (filterType) {
			this.params.FilterType = filterType;
		}
		return this;
	}

	public Build() {
		return this.params;
	}
}
