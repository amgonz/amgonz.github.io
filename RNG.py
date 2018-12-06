import datetime
import random

sales_list = []
date_list = []

sales=100
date = datetime.datetime(2012, 2, 23, 0, 0)

sales_list.append(sales)
date_list.append(date)

while sales <= 2000:

    sales += random.randint(1,10)
    date += datetime.timedelta(days=1)

    sales_list.append(sales)
    date_list.append(date)

new_date_list = []
for d in date_list:
    d = d.strftime('%m/%d/%Y')
    new_date_list.append(str(d))
   
print(sales_list)
print(new_date_list)