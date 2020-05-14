import asyncio

class Processor():
    def find_prices(search_term):
        prices = []

        for file_name in os.listdir('scrapers'):
            if file_name.startswith('.') or not file_name.ends_with('.py'):
                continue
            module_name = file_name[:-3]
            module = __import__(module_name)
            prices.extend(module.find_prices(search_term))