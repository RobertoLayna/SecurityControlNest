import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('logs')
export class Log {
  @PrimaryGeneratedColumn('increment')
  log_id: number;

  @Column()
  log_user_id: number;

  @Column()
  log_action: string;

  @Column()
  log_table: string;

  @Column()
  log_before: string;

  @Column()
  log_after: string;

  @CreateDateColumn({ select: false, type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ select: false, type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ select: false, type: 'timestamp' })
  deleted_at: Date;
}
