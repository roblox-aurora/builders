export class TeleportOptionsBuilder {
	private teleportOptions = new Instance("TeleportOptions");

	public SetReservedServerAccessCode(
		code: string,
	): Omit<TeleportOptionsBuilder, "SetShouldReserveServer" | "SetServerInstanceId"> {
		this.teleportOptions.ReservedServerAccessCode = code;
		return this;
	}

	public SetServerInstanceId(
		serverInstanceId: string,
	): Omit<TeleportOptionsBuilder, "SetReservedServerAccessCode" | "SetShouldReserveServer"> {
		this.teleportOptions.ServerInstanceId = serverInstanceId;
		return this;
	}

	public SetShouldReserveServer(
		shouldReserveServer: boolean,
	): Omit<TeleportOptionsBuilder, "SetReservedServerAccessCode" | "SetServerInstanceId"> {
		this.teleportOptions.ShouldReserveServer = shouldReserveServer;
		return this;
	}

	public SetTeleportData<T extends { [P in string]: unknown }>(value: T) {
		this.teleportOptions.SetTeleportData(value);
		return this;
	}

	public Build() {
		return this.teleportOptions;
	}
}
