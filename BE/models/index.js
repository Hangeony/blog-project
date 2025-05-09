import User from "./users";
import Account from "./accounts";

// 관계설정

User.hasOne(Account, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Account.belongsTo(User, {
  foreignKey: "user_id",
});

export { User, Account };
