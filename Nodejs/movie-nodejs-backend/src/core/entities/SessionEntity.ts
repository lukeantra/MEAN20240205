import {
	Entity,
	Column,
	PrimaryColumn,
	CreateDateColumn,
	UpdateDateColumn,
	Index,
} from "typeorm";

@Entity("sessions")
export class SessionEntity implements ISession {
	@PrimaryColumn("varchar", { length: 255 })
	id!: string;

	@Index()
	@Column("bigint")
	expiresAt!: number;

	@Column("text")
	data!: string;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}

export interface ISession {
	id: string;
	expiresAt: number;
	data: string;
	createdAt: Date;
	updatedAt: Date;
}
