echo 'Git ops'
git stash
git pull
echo 'Ready'
rm -rf /var/www/your_domain
mv ./- /var/www/your_domain
mv ./404.php /var/www/your_domain
mv ./about /var/www/your_domain
mv ./contact /var/www/your_domain
mv ./css /var/www/your_domain
mv ./images /var/www/your_domain
mv ./index.php /var/www/your_domain
mv ./js /var/www/your_domain
mv ./login /var/www/your_domain
mv ./products /var/www/your_domain
mv ./README.md /var/www/your_domain
mv ./site.webmanifest /var/www/your_domain
echo 'Compiled, built and published'
