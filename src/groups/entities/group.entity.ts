import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn('increment')
  group_id: number;

  @Column()
  group_name: string;

  @CreateDateColumn({ select: false, type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ select: false, type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ select: false, type: 'timestamp' })
  deleted_at: Date;
}
