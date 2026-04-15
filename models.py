from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import bcrypt

db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'users'
    id            = db.Column(db.Integer, primary_key=True)
    email         = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    role          = db.Column(db.String(20), nullable=False)  # 'officer', 'literate_farmer'
    phone         = db.Column(db.String(20), nullable=True)
    name          = db.Column(db.String(120), nullable=False)
    verified      = db.Column(db.Boolean, default=False)
    created_at    = db.Column(db.DateTime, default=datetime.utcnow)

    farmers    = db.relationship('Farmer', backref='officer', lazy=True, foreign_keys='Farmer.officer_id')
    feedbacks  = db.relationship('Feedback', backref='user', lazy=True)

    def set_password(self, password):
        self.password_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()

    def check_password(self, password):
        return bcrypt.checkpw(password.encode(), self.password_hash.encode())

class Farmer(db.Model):
    __tablename__ = 'farmers'
    id              = db.Column(db.Integer, primary_key=True)
    name            = db.Column(db.String(120), nullable=False)
    aadhar          = db.Column(db.String(12), unique=True, nullable=False)
    phone           = db.Column(db.String(20), nullable=True)
    literacy_status = db.Column(db.String(20), nullable=False)
    officer_id      = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    user_id         = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=True)
    created_at      = db.Column(db.DateTime, default=datetime.utcnow)

    user            = db.relationship('User', foreign_keys=[user_id], backref='farmer_accounts')
    recommendations = db.relationship('Recommendation', backref='farmer', lazy=True)
    feedbacks       = db.relationship('Feedback', backref='farmer', lazy=True)

class Recommendation(db.Model):
    __tablename__ = 'recommendations'
    id           = db.Column(db.Integer, primary_key=True)
    farmer_id    = db.Column(db.Integer, db.ForeignKey('farmers.id'), nullable=False)
    crop         = db.Column(db.String(120), nullable=False)
    fertilizer   = db.Column(db.String(255), nullable=False)
    confidence   = db.Column(db.Float, nullable=False)
    weather_data = db.Column(db.JSON, nullable=True)
    created_at   = db.Column(db.DateTime, default=datetime.utcnow)

class Feedback(db.Model):
    __tablename__ = 'feedbacks'
    id         = db.Column(db.Integer, primary_key=True)
    user_id    = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    farmer_id  = db.Column(db.Integer, db.ForeignKey('farmers.id'), nullable=True)
    crop       = db.Column(db.String(120), nullable=False)
    rating     = db.Column(db.Integer, nullable=False)   # 1-5
    comment    = db.Column(db.Text, nullable=True)
    location   = db.Column(db.String(120), nullable=True)
    season     = db.Column(db.String(50), nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class AuditLog(db.Model):
    __tablename__ = 'audit_logs'
    id        = db.Column(db.Integer, primary_key=True)
    user_id   = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    action    = db.Column(db.String(255), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    user      = db.relationship('User', backref='audit_logs')