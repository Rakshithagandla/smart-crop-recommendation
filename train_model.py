import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import joblib
import os
from sklearn.metrics import classification_report, accuracy_score
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
import seaborn as sns
import matplotlib.pyplot as plt

print("🌾 Starting Model Training...")

# Create model directory
os.makedirs('model', exist_ok=True)

# Load dataset
print("📊 Loading dataset...")
df = pd.read_csv('data/Crop_recommendation.csv')

print(f"Dataset shape: {df.shape}")
print(f"Columns: {df.columns.tolist()}")
print(f"Crops: {df['label'].unique().tolist()}")

# Prepare features and labels
X = df[['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']].values
y = df['label'].values

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print(f"Training samples: {X_train.shape[0]}")
print(f"Testing samples: {X_test.shape[0]}")

# Train model
print("\n🤖 Training Random Forest model...")
rf_model = RandomForestClassifier(
    n_estimators=100,
    max_depth=20,
    random_state=42,
    n_jobs=-1
)

rf_model.fit(X_train, y_train)

# Evaluate
# Evaluate
y_pred = rf_model.predict(X_test)

# Basic accuracy
accuracy = accuracy_score(y_test, y_pred)
print(f"\n✅ Model Accuracy: {accuracy * 100:.2f}%")

# Classification report
report = classification_report(y_test, y_pred, output_dict=True)
print(classification_report(y_test, y_pred))

# 📊 Create overall performance table (for PPT)
import pandas as pd

performance_table = pd.DataFrame({
    "Model": ["Random Forest"],
    "Accuracy": [accuracy],
    "Precision": [report['weighted avg']['precision']],
    "Recall": [report['weighted avg']['recall']],
    "F1-Score": [report['weighted avg']['f1-score']]
})

print("\n📊 Performance Table:")
print(performance_table)

# 💾 Save table as CSV (optional for report/PPT)
performance_table.to_csv("model/performance_table.csv", index=False)

# 📉 Confusion Matrix (saved as image for PPT)
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay
import matplotlib.pyplot as plt

cm = confusion_matrix(y_test, y_pred, labels=rf_model.classes_)

disp = ConfusionMatrixDisplay(confusion_matrix=cm, display_labels=rf_model.classes_)
disp.plot(xticks_rotation=90)

plt.title("Confusion Matrix - Crop Recommendation")
plt.tight_layout()
plt.savefig("model/confusion_matrix.png", dpi=300)
plt.close()