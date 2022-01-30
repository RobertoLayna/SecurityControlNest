import { Residential } from 'src/residentials/entities/residential.entity';
export declare class Residence {
    residence_id: number;
    residence_residential_id: number;
    residence_number: number;
    residence_address: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    residential: Residential;
}
