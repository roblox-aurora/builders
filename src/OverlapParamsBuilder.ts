export class OverlapParamsBuilder {
	private filterDescendantsInstances = new Array<Instance>();
	private filterType: Enum.RaycastFilterType = Enum.RaycastFilterType.Blacklist;
	private maxParts = 0;
	private collisionGroupId = "Default";

	public constructor() {}

	public SetMaxParts(maxParts: number) {
		this.maxParts = maxParts;
		return this;
	}

	public SetCollisionGroup(collisionGroupId: string) {
		this.collisionGroupId = collisionGroupId;
		return this;
	}

	public SetFilter(filterDescendantsInstances: Instance[], filterType?: Enum.RaycastFilterType) {
		this.filterDescendantsInstances = filterDescendantsInstances;
		if (filterType) {
			this.filterType = filterType;
		}
		return this;
	}

	public Build() {
		const params = new OverlapParams();
		params.FilterType = this.filterType;
		params.FilterDescendantsInstances = this.filterDescendantsInstances;
		params.CollisionGroup = this.collisionGroupId;
		params.MaxParts = this.maxParts;
		return params;
	}
}
