import random
import json

def generate_predictions():
    predictions = []
    for _ in range(10):  # Generate 10 mock predictions
        input_data = random.uniform(0, 1)
        actual_result = random.choice([0, 1])
        predicted_result = random.choice([0, 1])
        predictions.append({
            "input_data": input_data,
            "actual_result": actual_result,
            "predicted_result": predicted_result
        })
    return predictions

if __name__ == "__main__":
    predictions_data = generate_predictions()
    with open("predictions.json", "w") as f:
        json.dump(predictions_data, f)
