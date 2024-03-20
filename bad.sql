CREATE TABLE user_permissions (
  permissions TEXT[] NOT NULL
);

-- Migration script
INSERT INTO user_permissions (permissions)
VALUES (('read', 'write', 'delete'));