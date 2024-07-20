import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

interface ContactAttributes {
    id?: number;
    phoneNumber?: string;
    email?: string;
    linkedId?: number;
    linkPrecedence: 'primary' | 'secondary';
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

interface ContactCreationAttributes extends Optional<ContactAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'> {}

class Contact extends Model<ContactAttributes, ContactCreationAttributes> implements ContactAttributes {
    public id!: number;
    public phoneNumber?: string;
    public email?: string;
    public linkedId?: number;
    public linkPrecedence!: 'primary' | 'secondary';
    public createdAt!: Date;
    public updatedAt!: Date;
    public deletedAt!: Date | null;
}

Contact.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    linkedId: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    linkPrecedence: {
        type: DataTypes.ENUM('primary', 'secondary'),
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Contact',
    timestamps: false
});

sequelize.sync()
    .then(() => {
        console.log('Contact table has been synchronized.');
    })
    .catch(error => {
        console.error('Unable to sync the Contact table:', error);
    });

export default Contact;