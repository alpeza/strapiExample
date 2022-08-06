module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c9e1c982e61a1426faa434aa9819ac77'),
  },
});
