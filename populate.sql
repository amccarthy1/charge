/*
 * This SQLite script will add a few sample rows to the database.
 * To populate your database, run 'sqlite3 <path-to-db.sqlite3> < populate.sql'
 * Note that this will clear out your ChannelTypes and Channels tables
 */
-- TODO populate this table without nuking it first
DELETE FROM ChannelTypes;
INSERT INTO ChannelTypes (id, service, createdAt, updatedAt) VALUES (1, 'twitch.tv', DATE('now'), DATE('now'));
INSERT INTO ChannelTypes (id, service, createdAt, updatedAt) VALUES (2, 'hitbox.tv', DATE('now'), DATE('now'));
INSERT INTO ChannelTypes (id, service, createdAt, updatedAt) VALUES (3, 'youtube', DATE('now'), DATE('now'));

-- TODO populate this table without nuking it first
DELETE FROM Channels;
INSERT INTO Channels (username, ChannelTypeId, createdAt, updatedAt) VALUES ('GamesDoneQuick', 1, DATE('now'), DATE('now'));
INSERT INTO Channels (username, ChannelTypeId, createdAt, updatedAt) VALUES ('extralife4kids', 1, DATE('now'), DATE('now'));
INSERT INTO Channels (username, ChannelTypeId, createdAt, updatedAt) VALUES ('wolfpackgaming', 2, DATE('now'), DATE('now'));

-- TODO add some sample events
