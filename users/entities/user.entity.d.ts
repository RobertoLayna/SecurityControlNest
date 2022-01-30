import { Residence } from 'src/residences/entities/residence.entity';
export declare class User {
    user_id: number;
    user_residence_id: number;
    user_complete_name: string;
    user_name: string;
    user_password: string;
    user_phone: string;
    user_rol: string;
    user_active: boolean;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    residence: Residence;
}
