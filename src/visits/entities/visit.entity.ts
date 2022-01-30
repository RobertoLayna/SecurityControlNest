import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('visits')
export class Visit {
  @PrimaryGeneratedColumn('increment')
  visit_id: number;

  @Column()
  visit_user_id: number;

  @Column('date')
  visit_start_date: Date;

  @Column('date')
  visit_end_date: Date;

  @Column('time')
  visit_start_time: Date;

  @Column('time')
  visit_end_time: Date;

  @Column()
  visit_identifier: string;

  @Column()
  visit_visitor_name: string;

  @Column()
  visit_completed: boolean;

  @CreateDateColumn({ select: false, type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ select: false, type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ select: false, type: 'timestamp' })
  deleted_at: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'visit_user_id' })
  user: User;
}
