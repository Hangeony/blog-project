import User from "./users.js";
import Account from "./accounts.js";

// 관계설정
User.hasOne(Account, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Account.belongsTo(User, {
  foreignKey: "user_id",
});

export { User, Account };
