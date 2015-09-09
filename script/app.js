var Users = React.createClass({
  getDevs: function(){
    var list_of_devs = null;

    $.ajax({
      url: this.props.source,
      type: 'get',
      dataType: 'json',
      async: false,
      success: function(data) {
          list_of_devs = data;
      } 
    });
    
    for (var i = list_of_devs.length - 1; i >= 0; i--) {
      list_of_devs[i].price = this.price(list_of_devs[i].login);
    };
    
    return list_of_devs;
  },
  
  price: function(username){
    var url = "https://api.github.com/users/"+username+"/followers";
    var followers = [];
    
    $.ajax({
      url: url,
      type: 'get',
      dataType: 'json',
      async: false,
      success: function(data) {
          followers = data;
      } 
    });

    return followers.length; 
  },
  
  render: function() {
    return (
      <tbody>
        {this.getDevs().map(function(dev){
          return <tr class="product">
              <td><img width="50" height="50" src={dev.avatar_url} /> </td>
              <td>{dev.login}</td>
              <td>${dev.price} </td>
              <td>
                <button className='btn btn-success pull-right' data-id={dev.id} data-username={dev.login} data-price={dev.price} >Add</button>
              </td>
            </tr>                    
        })}
      </tbody>
    );
  }
});

React.render(
  <Users source="https://api.github.com/users" />,
  document.getElementById('devs')
);   
