x_simple=s.add_constant(df[['sqft_living']])
y_simple=df['price']
model_simple=sm.OLS(y_simple,x_simple).fit()
print(model_simple.summary())
