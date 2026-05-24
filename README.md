# Wizualizator pierwiastków

Projekt szkolny pokazujący wszystkie 118 pierwiastków chemicznych.

## Funkcje

- tablica Mendelejewa na górze strony,
- lista pierwiastków z wyszukiwarką,
- wizualizacja jądra atomowego i powłok elektronowych,
- panel parametrów pierwiastka,
- podgląd mobilnej Wikipedii dla wybranego pierwiastka.

## Uruchamianie

W folderze projektu wpisz:

```bash
python server.py
```

Potem otwórz w przeglądarce:

```text
http://127.0.0.1:8000/
```

Jeśli na komputerze działa komenda `py`, można też użyć:

```bash
py server.py
```

## Pliki

- `index.html` - struktura aplikacji,
- `style.css` - wygląd strony,
- `app.js` - dane pierwiastków i logika aplikacji,
- `server.py` - prosty serwer lokalny w Pythonie.

## Publikacja na GitHub

Przykładowe komendy:

```bash
git init
git add .
git commit -m "Dodaj wizualizator pierwiastkow"
git branch -M main
git remote add origin https://github.com/TWOJ_LOGIN/wizualizator-pierwiastkow.git
git push -u origin main
```

Po wrzuceniu repozytorium możesz też włączyć GitHub Pages, bo aplikacja jest statyczna.
