// Associations 
const Livestream = require('./livestream');
const User = require('./user');
const Message = require('./message')
const Follow = require('./follow');

User.hasOne(Livestream, {
    foreignKey: 'user_id',
    as: 'user',
})

Livestream.hasMany(Message, {
    foreignKey: 'livestream_id',
    as: 'message',
});

Message.belongsTo(Livestream, {
    foreignKey: 'livestream_id',
    as: 'livestream'
});

User.hasMany(Message, {
    foreignKey: 'user_id',
    as: 'message',
});

Message.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});

Follow.belongsTo(User, {
    foreignKey: 'follower',
    as: 'followerUser',
});

Follow.belongsTo(User, {
    foreignKey: 'following',
    as: 'followingUser',
});

module.exports = {
    User,
    Livestream,
    Message,
    Follow,
};