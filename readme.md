#Grid

#####Todos 
1. Add in Jasmine tests
2. Fix the shuffleColors and checkSelection methods so that they work correctly.
3. Animate the selection process

####Bundler install message about cappybara
Your bundle is complete! Use `bundle show [gemname]` to see where a bundled gem is installed.
Post-install message from capybara:
IMPORTANT! Some of the defaults have changed in Capybara 2.1. If you're experiencing failures,
please revert to the old behaviour by setting:

    Capybara.configure do |config|
      config.match = :one
      config.exact_options = true
      config.ignore_hidden_elements = true
      config.visible_text_only = true
    end

If you're migrating from Capybara 1.x, try:

    Capybara.configure do |config|
      config.match = :prefer_exact
      config.ignore_hidden_elements = false
    end

Details here: http://www.elabs.se/blog/60-introducing-capybara-2-1