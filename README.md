# slack_bot

## abstract
this repository is program for slack-bot for informing the news of california.
Selenium was used for getting the URL of website involved in California.

## environment
windows10 or Linux(EC2)
python3.6
selenium 3.141.0
chromedriver
headless-chronium
GAS

## Method
1. Scraping the URL about california in Google Images by selenim
2. Run the program by AWS lambda function
      →I cannot use external library(selenium) so I use the GAS

## problem
When using the cloud9 for creating lambda function, I have a problem about change of python2 to python3
Initial setting of AWS cloud9 of python, python2 is utilized. But, I want to use python3.

## Solution
I write Qiita for solve this problem in Japanese.

https://qiita.com/masaki11111/items/d1aef1e9bbc8a9d02c48


![slackimage](https://user-images.githubusercontent.com/52119206/68014836-edd57880-fcd3-11e9-8466-8dc93102e900.png)
