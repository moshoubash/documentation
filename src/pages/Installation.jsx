import React from 'react'

export default function Installation() {
  return (
    <>
      <div className='container py-5'>
        <div className="card-body">
          <h1 className="card-title display-4">Installation Guide</h1>

          <h4 className="mt-4">System Requirements</h4>
          <ul>
            <li>PHP 8.1 or higher</li>
            <li>Composer</li>
            <li>Node.js and NPM</li>
            <li>MySQL or compatible database</li>
            <li>Web server (Apache/Nginx)</li>
          </ul>

          <h4 className="mt-4">Installation Steps</h4>

          <h5>1. Clone the Repository</h5>
          <pre className="bg-light p-2 rounded"><code>git clone &lt;repository-url&gt;
            cd TeamRoom</code></pre>

          <h5>2. Install PHP Dependencies</h5>
          <pre className="bg-light p-2 rounded"><code>composer install</code></pre>

          <h5>3. Install JavaScript Dependencies</h5>
          <pre className="bg-light p-2 rounded"><code>npm install</code></pre>

          <h5>4. Environment Configuration</h5>
          <pre className="bg-light p-2 rounded"><code>cp .env.example .env</code></pre>
          <p>Edit the <code>.env</code> file:</p>
          <pre className="bg-light p-2 rounded"><code>DB_CONNECTION=mysql
            DB_HOST=127.0.0.1
            DB_PORT=3306
            DB_DATABASE=teamroom
            DB_USERNAME=root
            DB_PASSWORD=</code></pre>

          <h5>5. Generate Application Key</h5>
          <pre className="bg-light p-2 rounded"><code>php artisan key:generate</code></pre>

          <h5>6. Run Database Migrations and Seeders</h5>
          <pre className="bg-light p-2 rounded"><code>php artisan migrate
            php artisan db:seed</code></pre>

          <h5>7. Storage Link</h5>
          <p>Create symbolic link:</p>
          <pre className="bg-light p-2 rounded"><code>php artisan storage:link</code></pre>

          <h5>8. Build Frontend Assets</h5>
          <pre className="bg-light p-2 rounded"><code>npm run build</code></pre>

          <h5>9. Start the Development Server</h5>
          <pre className="bg-light p-2 rounded"><code>php artisan serve</code></pre>
          <p>The application will be available at <code>http://localhost:8000</code></p>

          <h4 className="mt-4">Additional Configuration</h4>

          <h5>Mail Configuration</h5>
          <pre className="bg-light p-2 rounded"><code>MAIL_MAILER=smtp
            MAIL_HOST=mailhog
            MAIL_PORT=1025
            MAIL_USERNAME=null
            MAIL_PASSWORD=null
            MAIL_ENCRYPTION=null
            MAIL_FROM_ADDRESS="hello@teamroom.com"
            MAIL_FROM_NAME="YOURAPPNAME"</code></pre>

          <h5>File Storage</h5>
          <pre className="bg-light p-2 rounded"><code>FILESYSTEM_DISK=local</code></pre>

          <h4 className="mt-4">Troubleshooting</h4>
          <ul>
            <li>Ensure correct permissions for <code>storage</code> and <code>bootstrap/cache</code> directories.</li>
            <li>Verify DB credentials in <code>.env</code>.</li>
            <li>Check mail service if emails are not sent.</li>
          </ul>

          <h4 className="mt-4">Production Deployment</h4>
          <pre className="bg-light p-2 rounded"><code>composer install --optimize-autoloader --no-dev
            npm run build
            php artisan config:cache
            php artisan route:cache
            php artisan view:cache</code></pre>
          <p>Ensure your server points to the <code>public</code> directory and proper permissions are set.</p>
        </div>
      </div>
    </>
  )
}