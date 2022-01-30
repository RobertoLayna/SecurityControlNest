import { Residence } from 'src/residences/entities/residence.entity';
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

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column()
  user_residence_id: number;

  @Column()
  user_complete_name: string;

  @Column()
  user_name: string;

  @Column({ select: false })
  user_password: string;

  @Column()
  user_phone: string;

  @Column()
  user_rol: string;

  @Column()
  user_active: boolean;

  @CreateDateColumn({ select: false, type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ select: false, type: 'timestamp' })
  updated_at: Date;

  @DeleteDateColumn({ select: false, type: 'timestamp' })
  deleted_at: Date;

  @ManyToOne(() => Residence)
  @JoinColumn({ name: 'user_residence_id' })
  residence: Residence;
}
