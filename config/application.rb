require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Game
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers

    config.generators do |g|
      g.javascript_engine :js
    end
    
    config.assets.paths << Rails.root.join('vendor', 'assets', 'bower_components')
  end
end
