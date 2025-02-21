import pandas as pd
from sklearn.linear_model import LogisticRegression

def suggest_alternative(resources, booked_dates):
    model = LogisticRegression()
    df = pd.DataFrame({"resource": resources, "date": booked_dates})
    model.fit(df[["resource"]], df["date"])
    return model.predict([[1]])  # Example
