export class RaycastParamsBuilder {
	private params = new RaycastParams();

	public SetFilter(filterDescendantsInstances: Instance[], filterType?: Enum.RaycastFilterType) {
		this.params.FilterDescendantsInstances = filterDescendantsInstances;
		if (filterType) {
			this.params.FilterType = filterType;
		}
		return this;
	}

	public SetIgnoreWater(ignoreWater: boolean) {
		this.params.IgnoreWater = ignoreWater;
		return this;
	}

	public SetCollisionGroup(collisionGroupId: string) {
		this.params.CollisionGroup = collisionGroupId;
		return this;
	}

	public Build() {
		return this.params;
	}
}
